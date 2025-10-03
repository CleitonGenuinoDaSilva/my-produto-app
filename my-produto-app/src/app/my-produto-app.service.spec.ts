import { TestBed } from '@angular/core/testing';

import { MyProdutoAppService } from './my-produto-app.service';

describe('MyProdutoAppService', () => {
  let service: MyProdutoAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProdutoAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
