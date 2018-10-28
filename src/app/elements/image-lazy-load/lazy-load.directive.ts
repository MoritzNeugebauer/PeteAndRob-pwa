import { 
  AfterViewInit, 
  Directive, 
  ElementRef, 
  HostBinding, 
  Input, 
  OnInit
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit, OnInit {
  @HostBinding('attr.src') srcAttr = null;
  @HostBinding('attr.class') classAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    //this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  ngOnInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
    this.classAttr = "img-loaded";
  }

}
