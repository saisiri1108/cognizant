import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardComponent, User } from './user-card/user-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, UserCardComponent, HighlightDirective, TruncatePipe],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Components, Directives & Pipes Demo';

  // Two-way binding target: [(ngModel)]="searchTerm"
  searchTerm = '';

  bio = 'Angular is a platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.';

  users: User[] = [
    { id: 1, name: 'Sadwik', joinedOn: new Date('2024-06-01'), salary: 45000, isActive: true },
    { id: 2, name: 'Kranthi', joinedOn: new Date('2023-11-15'), salary: 40000, isActive: false },
    { id: 3, name: 'Paradeep', joinedOn: new Date('2025-01-20'), salary: 42000, isActive: true }
  ];

  selectedUser: User | null = null;
  viewMode: 'grid' | 'list' = 'grid';

  get filteredUsers(): User[] {
    const term = this.searchTerm.toLowerCase();
    return this.users.filter((u) => u.name.toLowerCase().includes(term));
  }

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }
}
