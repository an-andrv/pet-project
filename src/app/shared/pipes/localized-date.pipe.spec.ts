import { LocalizedDatePipe } from './localized-date.pipe';

describe('LocalizedDatePipe', () => {
  let mockDate: string;
  let mockResultDate: string;
  let pipe: LocalizedDatePipe;
  beforeEach(() => {
    pipe = new LocalizedDatePipe();
    mockDate = '2022-12-19';
    mockResultDate = 'Dec 19, 2022 03:00';
  });

  it('create an instance', () => {
    expect(pipe.transform(mockDate, true)).toBe(mockResultDate);
  });
});
