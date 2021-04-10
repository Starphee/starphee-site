import React from 'react';
import { useId } from 'react-id-generator';
import '../styles/fancy-switch.css';

export default function FancySwitch({ children }) {
  const [htmlId] = useId();
  return (
    <div className="fancy-switch">
      <span class="switch">
        <span class="switch-border1">
          <span class="switch-border2">
            <input id={htmlId} type="checkbox" />
            <label for={htmlId}></label>
            <span class="switch-top"></span>
            <span class="switch-shadow"></span>
            <span class="switch-handle"></span>
            <span class="switch-handle-left"></span>
            <span class="switch-handle-right"></span>
            <span class="switch-handle-top"></span>
            <span class="switch-handle-bottom"></span>
            <span class="switch-handle-base"></span>
            <span class="switch-led switch-led-green">
              <span class="switch-led-border">
                <span class="switch-led-light">
                  <span class="switch-led-glow"></span>
                </span>
              </span>
            </span>
            <span class="switch-led switch-led-red">
              <span class="switch-led-border">
                <span class="switch-led-light">
                  <span class="switch-led-glow"></span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      {children}
    </div>
  );
}
