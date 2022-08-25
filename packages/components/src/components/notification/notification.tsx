/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  State,
  Host,
  Watch,
} from '@stencil/core';
import cn from 'classnames';

const ICON_SIZE = 20;

const iconVariantNameMap = {
  informational: 'scale-icon-alert-information',
  warning: 'scale-icon-alert-warning',
  success: 'scale-icon-alert-success',
  danger: 'scale-icon-alert-error',
};

@Component({
  tag: 'scale-notification',
  styleUrl: './notification.css',
  shadow: true,
})
export class Notification {
  @Element() hostElement: HTMLElement;

  /** Heading */
  @Prop() heading: string;
  /** (optional) Type */
  @Prop() type?: 'inline' | 'banner' | 'toast' = 'inline';
  /** (optional) Variant */
  @Prop() variant?: 'danger' | 'warning' | 'success' | 'informational' =
    'informational';
  /** (optional) Visible */
  @Prop({ reflect: true }) opened?: boolean;
  /** (optional) Show the close button */
  @Prop() dismissible?: boolean = false;
  /** (optional) Time in milliseconds until it closes by itself */
  @Prop() delay?: number;
  /** (optional) `aria-live` of element */
  @Prop() innerAriaLive?: string = 'assertive';
  /** (optional) Label for close button */
  @Prop() closeButtonLabel?: string = 'Close Pop-up';
  /** (optional) `title` for close button */
  @Prop() closeButtonTitle?: string = 'Close';
  /** (optional) Injected styles */
  @Prop() styles?: string;

  /** What actually triggers opening/closing the notification */
  @State() isOpen: boolean = this.opened || false;
  @State() role: string = 'alert';
  @State() ariaLive: string;
  @State() hasTextSlot: boolean = false;
  @State() hasActionSlot: boolean = false; // unused for now

  @Event({ eventName: 'scale-open' }) scaleOpen: EventEmitter<void>;
  @Event({ eventName: 'scale-close' }) scaleClose: EventEmitter<void>;

  connectedCallback() {
    if (this.hostElement.hasAttribute('opened')) {
      // Do not use `role="alert"` if opened/visible on page load
      this.role = undefined;
      this.ariaLive = undefined;
      this.isOpen = true;
    }
    if (this.delay !== undefined) {
      setTimeout(this.close, this.delay);
    }
    this.hasTextSlot = this.hostElement.querySelector('[slot="text"]') != null;
    this.hasActionSlot =
      this.hostElement.querySelector('[slot="action"]') != null;
  }

  @Watch('opened')
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
    } else if (this.isOpen) {
      this.close();
    }
  }

  open = () => {
    this.isOpen = true;
    this.scaleOpen.emit();
    if (this.delay !== undefined) {
      setTimeout(this.close, this.delay);
    }
  };

  close = () => {
    this.isOpen = false;
    this.scaleClose.emit();
  };

  render() {
    const IconTag = iconVariantNameMap[this.variant];

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <div
          part={cn(
            'base',
            `type-${this.type}`,
            `variant-${this.variant}`,
            this.isOpen && 'open'
          )}
          role={this.role}
          aria-live={this.innerAriaLive}
        >
          <div part="icon" aria-hidden="true">
            <slot name="icon">
              <IconTag size={ICON_SIZE} selected={this.type === 'toast'} />
            </slot>
          </div>
          <div part="body">
            <div part="heading">{this.heading}</div>
            {this.hasTextSlot && (
              <div part="text">
                <slot name="text"></slot>
              </div>
            )}
          </div>
          {this.dismissible && (
            <scale-button
              part="close-button"
              variant="ghost"
              onClick={this.close}
              aria-label={this.closeButtonLabel}
              title={this.closeButtonTitle}
            >
              <slot name="close-icon">
                <scale-icon-action-circle-close size={ICON_SIZE} decorative />
              </slot>
            </scale-button>
          )}
        </div>
      </Host>
    );
  }
}
