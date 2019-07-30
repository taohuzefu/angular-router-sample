import { CrisesModule } from './heroes.module';

describe('HeroesModule', () => {
  let heroesModule: CrisesModule;

  beforeEach(() => {
    heroesModule = new CrisesModule();
  });

  it('should create an instance', () => {
    expect(heroesModule).toBeTruthy();
  });
});
