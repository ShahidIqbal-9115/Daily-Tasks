import { Component } from '@angular/core';
import {  OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentOneComponent } from '../component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from '../component-three/component-three.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {

  @ViewChild('formTemplate', { read: ViewContainerRef }) formRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  RenderComponentOne() {
    this.dialog.open(ComponentOneComponent);
    this.formRef.clear();
     this.componentFactoryResolver.resolveComponentFactory(ComponentOneComponent);
  }

  RenderComponenttwo() {
    this.dialog.closeAll();
    this.formRef.clear();
    const indexComponent = this.componentFactoryResolver.resolveComponentFactory(ComponentTwoComponent);
    const componentRef = this.formRef.createComponent(indexComponent);
    componentRef.instance.title = 'This is Component Two';
  }

  RenderComponentthree() {
    this.dialog.closeAll();
    this.formRef.clear();
    const welcomeComponent = this.componentFactoryResolver.resolveComponentFactory(ComponentThreeComponent);
    const componentRef = this.formRef.createComponent(welcomeComponent);
    componentRef.instance.title = 'This is Component Three';
  }

}
