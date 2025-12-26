import { TestBed } from '@angular/core/testing';
import { MyPackage } from './my-package';
import { test } from '@voidzero-dev/vite-plus/test';

test('overrides should work even when AOT is enabled', () => {
  /* AOT is enabled through `angular({jit: false})` in `../../../vite.config.ts`. */

  TestBed.overrideComponent(MyPackage, {
    set: {
      template: 'My Overriden Package',
    },
  });

  const fixture = TestBed.createComponent(MyPackage);
  expect(fixture.nativeElement.textContent).toBe('My Overriden Package');
});
