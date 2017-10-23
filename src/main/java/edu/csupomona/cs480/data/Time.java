package edu.csupomona.cs480.data;

public class Time implements Comparable<Time>{
	private int hour;
	private int minute;
	private String dayofTime;
	public Time(int hour, int minute, String dayofTime) {
		this.hour = hour;
		this.minute = minute;
		this.dayofTime = dayofTime;
	}
	public Time(int hour, int minute) {
		this.hour = hour;
		this.minute = minute;
	}
	public void convertto24() {
		if(isAM() && hour == 12) {
			hour = 0;
		} else if(!isAM() && hour != 12) {
			hour+=12;
		}
	}
	public boolean isAM() {
		return dayofTime.equals("AM");
	}
	public int getHour() {
		return hour;
	}
	public void setHour(int hour) {
		this.hour = hour;
	}
	public int getMinute() {
		return minute;
	}
	public void setMinute(int minute) {
		this.minute = minute;
	}
	/**
	 * @return the dayofTime
	 */
	public String getDayofTime() {
		return dayofTime;
	}
	/**
	 * @param dayofTime the dayofTime to set
	 */
	public void setDayofTime(String dayofTime) {
		this.dayofTime = dayofTime;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((dayofTime == null) ? 0 : dayofTime.hashCode());
		result = prime * result + hour;
		result = prime * result + minute;
		return result;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Time other = (Time) obj;
		if (dayofTime == null) {
			if (other.dayofTime != null)
				return false;
		} else if (!dayofTime.equals(other.dayofTime))
			return false;
		if (hour != other.hour)
			return false;
		if (minute != other.minute)
			return false;
		return true;
	}
	@Override
	public int compareTo(Time o) {
		// TODO Auto-generated method stub
		if(hour < o.hour){
			return -1;
		} else if(hour > o.hour) {
			return 1;
		} else if(minute < o.minute){
			return -1;
		} else if(minute > o.hour){
			return 1;
		}
		return 0;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Time [hour=" + hour + ", minute=" + minute + "]";
	}
	
}
