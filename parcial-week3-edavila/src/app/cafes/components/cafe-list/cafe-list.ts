import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Cafe } from '../../models/cafe';
import { CafeService } from '../../services/cafe';

@Component({
  selector: 'app-cafe-list',
  standalone: false,
  templateUrl: './cafe-list.html',
  styleUrl: './cafe-list.css'
})
export class CafeList implements OnInit {

  cafes: Cafe[] = [];

  get totalOrigen(): number {
  return this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
}

get totalBlend(): number {
  return this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
}

  constructor(
    private cafeService: CafeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe({
      next: (data) => {
        this.cafes = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al consultar los cafés:', error);
      }
    });
  }
}