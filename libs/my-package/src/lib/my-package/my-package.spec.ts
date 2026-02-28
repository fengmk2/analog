import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vite-plus/test';
import { MyPackage } from './my-package';
import { page } from 'vite-plus/test/browser';

describe(MyPackage.name, () => {
  it('works', async () => {
    TestBed.createComponent(MyPackage);

    await expect
      .element(page.elementLocator(document.body))
      .toHaveTextContent('My Package');
  });
});
