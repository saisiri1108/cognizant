import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  joinedOn: Date;
  salary: number;
  isActive: boolean;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit, OnChanges, OnDestroy {
  // @Input: data flows DOWN from parent to this child.
  @Input({ required: true }) user!: User;

  // @Output: events flow UP from this child to the parent.
  @Output() userSelected = new EventEmitter<User>();

  constructor() {
    console.log('UserCardComponent: constructor - inputs are NOT yet available here.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Fires whenever an @Input value changes (including the very first time).
    if (changes['user']) {
      console.log('UserCardComponent: ngOnChanges - user input changed', changes['user'].currentValue);
    }
  }

  ngOnInit(): void {
    // Fires once, after the first ngOnChanges - the right place for one-time init logic.
    console.log(`UserCardComponent: ngOnInit - card ready for ${this.user.name}`);
  }

  ngOnDestroy(): void {
    // Fires just before Angular removes this component - good place to clean up subscriptions/timers.
    console.log(`UserCardComponent: ngOnDestroy - cleaning up card for ${this.user.name}`);
  }

  onSelect(): void {
    this.userSelected.emit(this.user);
  }
}
