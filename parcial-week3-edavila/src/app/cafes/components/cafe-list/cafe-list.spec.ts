import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CafeList } from './cafe-list';
import { CafeService } from '../../services/cafe';

describe('CafeList', () => {
  let component: CafeList;
  let fixture: ComponentFixture<CafeList>;

  const cafesPrueba = [
    { id: 1, nombre: 'Café 1', tipo: 'Blend', region: 'Cali' },
    { id: 2, nombre: 'Café 2', tipo: 'Café de Origen', region: 'Pasto' },
    { id: 3, nombre: 'Café 3', tipo: 'Blend', region: 'Huila' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeList],
      providers: [
        {
          provide: CafeService,
          useValue: { getCafes: () => of(cafesPrueba) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display 3 coffees and the table header', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const headers = fixture.nativeElement.querySelectorAll('thead tr');

    expect(rows.length).toBe(3);
    expect(headers.length).toBe(1);
  });
});