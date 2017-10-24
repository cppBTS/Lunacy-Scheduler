package edu.csupomona.cs480.data;

public class TimeFrame{
	private Time startTime;
	private Time endTime;
	public TimeFrame(Time startTime, Time endTime) {
		super();
		this.startTime = startTime;
		this.endTime = endTime;
	}
	public Time getStartTime() {
		return startTime;
	}
	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	public Time getEndTime() {
		return endTime;
	}
	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}
	@Override
	public String toString() {
		return "TimeFrame [startTime=" + startTime + ", endTime=" + endTime
				+ "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((endTime == null) ? 0 : endTime.hashCode());
		result = prime * result
				+ ((startTime == null) ? 0 : startTime.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TimeFrame other = (TimeFrame) obj;
		if (endTime == null) {
			if (other.endTime != null)
				return false;
		} else if (!endTime.equals(other.endTime))
			return false;
		if (startTime == null) {
			if (other.startTime != null)
				return false;
		} else if (!startTime.equals(other.startTime))
			return false;
		return true;
	}
	public boolean contains(TimeFrame second) {
		// TODO Auto-generated method stub
		if(second.getStartTime().compareTo(startTime) >= 0 && second.getStartTime().compareTo(endTime) <= 0) {
			return true;
		}
		return false;
	}
}
