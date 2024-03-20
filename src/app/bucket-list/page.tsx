import React from 'react';

import { CheckboxWithText } from '@/components/checkbox-with-text';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { CONFIG } from '@/config';

export default function BucketListPage() {
  return (
    <MaxWidthWrapper className="">
      <div className="grid grid-cols-1 gap-10 pb-10">
        <div className="flex flex-col">
          <span className="text-4xl font-bold mb-6 md:mb-4">
            My Bucket List
          </span>
          <div>
            {CONFIG.bucketList
              .sort((a, b) => {
                // If a is not checked and b is checked, a should come first
                if (!a.isChecked && b.isChecked) {
                  return 1;
                }
                // If a is checked and b is not, b should come first
                if (a.isChecked && !b.isChecked) {
                  return -1;
                }
                // If both have the same checked status, keep their original order
                return 0;
              })
              .map((i, idx) => {
                return (
                  <div key={idx}>
                    <CheckboxWithText text={i.item} isChecked={i.isChecked} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
