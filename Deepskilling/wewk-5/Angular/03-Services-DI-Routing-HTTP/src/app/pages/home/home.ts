import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, User } from '../../services/data.service';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  // Registering CounterService HERE (component-level) means every instance of
  // HomeComponent gets its OWN CounterService - separate from any other component's.
  providers: [CounterService],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private dataService: DataService, // root-level singleton
    public counterService: CounterService // component-level instance
  ) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load users.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
