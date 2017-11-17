package edu.csupomona.cs480.data;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class Database {
	public static void main(String[] args){
    	FileInputStream serviceAccount;
		try {
			serviceAccount = new FileInputStream("lunacy-scheduler-firebase-adminsdk-l721m-606ad2f275.json");

	    	FirebaseOptions options;
	    	
			try {
				options = new FirebaseOptions.Builder()
				  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
				  .setDatabaseUrl("https://lunacy-scheduler.firebaseio.com")
				  .setDatabaseAuthVariableOverride(null)
				  .build();
				


		    	FirebaseApp.initializeApp(options);
		    	final FirebaseDatabase database = FirebaseDatabase.getInstance();
		    	System.out.println(database);
		    	DatabaseReference ref = database.getReference("userss");
		    	ref.setValueAsync("HI");
		    	ref.addValueEventListener(new ValueEventListener() {
		    	    @Override
		    	    public void onDataChange(DataSnapshot dataSnapshot) {
		    	        System.out.println("HELLO");
		    	    }

		    	    @Override
		    	    public void onCancelled(DatabaseError databaseError) {
		    	        System.out.println("The read failed: " + databaseError.getCode());
		    	    }
		    	});
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
