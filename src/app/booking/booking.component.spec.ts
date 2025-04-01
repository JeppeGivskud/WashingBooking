import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BookingComponent } from "./booking.component";

describe("BookingComponent", () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have two days", () => {
    expect(component.days.length).toBe(2);
    expect(component.days[0].name).toBe("Mandag");
    expect(component.days[1].name).toBe("Tirsdag");
  });

  it("should have five time slots per day", () => {
    expect(component.days[0].timeSlots.length).toBe(5);
    expect(component.days[1].timeSlots.length).toBe(5);
  });

  it("should return an image URL", () => {
    expect(component.getImageUrl()).toBe(
      "https://cdn.builder.io/api/v1/image/assets/TEMP/792fc0487bc40f59d1d9b11ab58d650037722a23?placeholderIfAbsent=true&apiKey=e3c5a4bc6e4f4253907dec5355c91c46",
    );
  });
});
