import { Routes } from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import { DetailsComponent } from "./details/details.component";

export const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: "", redirectTo: "booking", pathMatch: "full" },
  { path: "booking", component: BookingComponent },
  { path: "**", redirectTo: "booking" },

];
