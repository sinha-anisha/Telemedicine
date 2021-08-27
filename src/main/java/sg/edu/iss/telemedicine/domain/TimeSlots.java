package sg.edu.iss.telemedicine.domain;

public enum TimeSlots 
{
	NINE("09:00-09:30"),
	NINETHIRTY("09:30-10:00"),
	TEN("10:00-10:30"),
	ELEVEN("11:00-11:30"),
	TWELVE("12:00-12:30"),
	THIRTEEN("13:00-13:30");
	
private final String displayValue;
    
    private TimeSlots(String displayValue) {
        this.displayValue = displayValue;
    }
    
    public String getDisplayValue() {
        return displayValue;
    }
}
