'use client';

import React, { useState } from 'react';

export function CheckboxWithText({
  text,
  isChecked,
}: {
  text: string;
  isChecked: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        disabled={true}
        className="w-4 h-4"
      />
      <label
        htmlFor="checkbox"
        className={`select-none ${isChecked ? 'line-through decoration-red-600 decoration-wavy' : ''}`}
      >
        {text}
      </label>
    </div>
  );
}
