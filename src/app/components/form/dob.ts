import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[formControlName][dobMask]"
})
export class DobMaskDirective {
  constructor(public ngControl: NgControl) {}
  // or simplier add dashes US pattern mode
  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, "");

    if (trimmed.length > 10) {
      trimmed = trimmed.substr(0, 10);
    }

    trimmed = trimmed.replace(/-/g, "");

    let numbers = [];
    numbers.push(trimmed.substr(0, 4));
    if (trimmed.substr(4, 4) !== "") numbers.push(trimmed.substr(4, 4));
    if (trimmed.substr(5, 2) != "") numbers.push(trimmed.substr(5, 2));
    input.value = numbers.join("-");
  }
}
