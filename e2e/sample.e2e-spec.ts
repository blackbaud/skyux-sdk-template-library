import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Numeric', () => {
  it('should match screenshot', (done) => {
    SkyHostBrowser.get('/');
    SkyHostBrowser.setWindowBreakpoint('sm');
    expect('#screenshot-sample-1').toMatchBaselineScreenshot(done, {
      screenshotName: 'sample-sm'
    });
  });
});
