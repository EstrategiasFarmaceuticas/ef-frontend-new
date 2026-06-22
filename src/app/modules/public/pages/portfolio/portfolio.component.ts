import { Component, Inject, PLATFORM_ID, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('flipStage', { static: true }) flipStage!: ElementRef<HTMLDivElement>;

  isBrowser = false;
  loading = true;
  loaded = false;
  error = '';
  totalPages = 0;
  currentPage = 0;
  private flipBook: any = null;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngAfterViewInit(): Promise<void> {
    if (!this.isBrowser) return;
    try {
      const resp = await fetch('/assets/pdfs/portafolio.pdf');
      if (!resp.ok) throw new Error('No se pudo descargar el PDF');
      const buffer = await resp.arrayBuffer();
      await this.loadPdf(buffer);
    } catch (err) {
      this.error = 'No se pudo cargar el portafolio.';
      this.loading = false;
    }
  }

  private loadPdfJs(): Promise<any> {
    return new Promise((resolve, reject) => {
      if ((window as any).pdfjsLib) {
        resolve((window as any).pdfjsLib);
        return;
      }
      const script = document.createElement('script');
      script.src = '/assets/pdfs/pdf.mjs';
      script.type = 'module';
      script.onload = () => {
        const check = () => {
          if ((window as any).pdfjsLib) {
            resolve((window as any).pdfjsLib);
          } else {
            setTimeout(check, 50);
          }
        };
        check();
      };
      script.onerror = () => reject(new Error('Failed to load PDF.js'));
      document.head.appendChild(script);
    });
  }

  private async loadPdf(buffer: ArrayBuffer): Promise<void> {
    if (!this.isBrowser) return;
    this.loaded = false;
    this.error = '';

    const withTimeout = <T>(promise: Promise<T>, ms: number, label: string): Promise<T> =>
      Promise.race([
        promise,
        new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`Timeout: ${label}`)), ms))
      ]) as Promise<T>;

    try {
      const pdfjsLib = await this.loadPdfJs();
      const { PageFlip }: any = await import('page-flip');

      pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/pdfs/pdf.worker.min.mjs';

      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      this.totalPages = pdf.numPages;

      this.loaded = true;
      this.cdr.detectChanges();
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => setTimeout(r, 10));

      const stage = this.flipStage.nativeElement;
      stage.innerHTML = '';

      const flipEl = document.createElement('div');
      flipEl.className = 'flipbook-inner';
      stage.appendChild(flipEl);

      const scale = 4.0;
      const imageUrls: string[] = [];
      let renderedCount = 0;

      for (let i = 1; i <= pdf.numPages; i++) {
        if (!this.isBrowser) break;
        this.currentPage = i;
        this.cdr.detectChanges();
        try {
          const page: any = await withTimeout(pdf.getPage(i), 10000, `getPage(${i})`);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: false })!;
          const renderTask = page.render({ canvasContext: ctx, viewport });
          await withTimeout(renderTask.promise, 20000, `render(${i})`);
          imageUrls.push(canvas.toDataURL('image/jpeg', 1.0));
          renderedCount++;
        } catch (e) {
          console.warn('Page', i, 'failed:', e);
          const blank = document.createElement('canvas');
          blank.width = 2;
          blank.height = 2;
          imageUrls.push(blank.toDataURL('image/png'));
        }
      }

      this.totalPages = renderedCount;
      this.currentPage = 0;

      if (imageUrls.length === 0) {
        throw new Error('No se pudo renderizar ninguna página');
      }

      if (this.flipBook) {
        this.flipBook.destroy();
      }

      this.flipBook = new PageFlip(flipEl, {
        width: 400,
        height: 560,
        size: 'stretch',
        drawShadow: true,
        flippingTime: 800,
        usePortrait: true,
        startZIndex: 0,
        autoSize: true,
        maxShadowOpacity: 0.8,
        showCover: false,
        mobileScrollSupport: true,
        swipeDistance: 30,
        clickEventForward: true,
        useMouseEvents: true,
        showPageCorners: true,
        disableFlipByClick: false,
        startPage: 0,
      });

      const pageItems = imageUrls.map(url => {
        const img = document.createElement('img');
        img.src = url;
        img.style.cssText = 'width:100%;height:100%;object-fit:contain;display:block;pointer-events:none;';
        img.draggable = false;
        return img;
      });
      this.flipBook.loadFromHTML(pageItems);

      this.flipBook.on('flip', (e: any) => {
        this.currentPage = e.data;
      });


    } catch (err: any) {
      console.error('Error loading PDF:', err);
      this.error = 'Error al cargar el PDF. Asegúrate de que sea un archivo válido.';
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  prevPage(): void {
    this.flipBook?.flipPrev('top');
  }

  nextPage(): void {
    this.flipBook?.flipNext('top');
  }

  goToPage(page: number): void {
    this.flipBook?.turnToPage(page);
  }

  get progress(): number {
    if (this.totalPages === 0) return 0;
    return ((this.currentPage + 1) / this.totalPages) * 100;
  }

  get currentLabel(): string {
    return String(this.currentPage + 1);
  }
}
