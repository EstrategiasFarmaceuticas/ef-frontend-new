declare module 'page-flip' {
  interface IFlipSetting {
    startPage?: number;
    size?: 'fixed' | 'stretch';
    width: number;
    height: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    swipeDistance?: number;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
  }

  interface FlipEvent {
    data: number;
    object: PageFlip;
  }

  class PageFlip {
    constructor(element: HTMLElement, settings: IFlipSetting);
    loadFromImages(images: string[]): void;
    loadFromHTML(items: HTMLElement[]): void;
    updateFromImages(images: string[]): void;
    updateFromHtml(items: HTMLElement[]): void;
    turnToPage(page: number): void;
    flipNext(corner?: 'top' | 'bottom'): void;
    flipPrev(corner?: 'top' | 'bottom'): void;
    flip(page: number, corner?: 'top' | 'bottom'): void;
    getPageCount(): number;
    getCurrentPageIndex(): number;
    getOrientation(): string;
    destroy(): void;
    on(event: 'flip', handler: (e: FlipEvent) => void): void;
    on(event: 'changeState', handler: (e: any) => void): void;
    on(event: 'changeOrientation', handler: (e: any) => void): void;
    on(event: string, handler: (e: any) => void): void;
  }

  export { PageFlip, IFlipSetting, FlipEvent };
}
