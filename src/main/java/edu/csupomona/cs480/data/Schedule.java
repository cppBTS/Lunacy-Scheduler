package edu.csupomona.cs480.data;

public class Schedule {
	private TimeFrame[] schedule;

	public Schedule(TimeFrame[] schedule) {
		this.schedule = schedule;
	}

	public TimeFrame[] getSchedule() {
		return schedule;
	}
	
	public TimeFrame getSchedule(int day) {
		return schedule[day];
	}
	
	public void setSchedule(TimeFrame[] schedule) {
		this.schedule = schedule;
	}
	
	public void setSchedule(int day, TimeFrame schedule) {
		this.schedule[day] = schedule;
	}
	
	public TimeFrame findbestTime(Schedule other) {
		TimeFrame best = new TimeFrame(new Time(1,20), new Time(2,30));
		
		return best;
	}
}
