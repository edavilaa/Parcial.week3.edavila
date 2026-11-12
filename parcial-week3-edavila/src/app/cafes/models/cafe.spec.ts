import { Cafe } from './cafe';

describe('Cafe', () => {
  it('should create a coffee', () => {
    const cafe = new Cafe(
      1,
      'Café de prueba',
      'Blend',
      'Cali',
      'Chocolate',
      1800,
      'imagen.jpg'
    );

    expect(cafe).toBeTruthy();
  });
});