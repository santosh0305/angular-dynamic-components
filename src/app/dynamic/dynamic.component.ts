import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-dynamic",
  templateUrl: "./dynamic.component.html",
  styleUrls: ["./dynamic.component.css"]
})
export class DynamicComponent {
  @Input() index: number;
  @Input() age: number;

  constructor(private fb: FormBuilder) {}
}
