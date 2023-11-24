package com.example.myapplication;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.content.DialogInterface;
import android.graphics.Color;

import android.content.pm.PackageManager;
import android.location.Location;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;

//

//
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText inp_text=findViewById(R.id.name_input);
        Button but=findViewById(R.id.getlocation);
        TextView name_label=findViewById(R.id.name_view);
        FusedLocationProviderClient fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);

        TextView lat=findViewById(R.id.latitude);
        TextView longit=findViewById(R.id.longitude);

        Button changecol=findViewById(R.id.changecolour);

        but.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                String text1=inp_text.getText().toString();
                name_label.setText(text1);

                if (ContextCompat.checkSelfPermission(MainActivity.this, android.Manifest.permission.ACCESS_FINE_LOCATION)
                        == PackageManager.PERMISSION_GRANTED) {
                    fusedLocationProviderClient.getLastLocation()
                            .addOnSuccessListener(MainActivity.this, new OnSuccessListener<Location>() {
                                @Override
                                public void onSuccess(Location location) {
                                    if (location != null) {
                                        double latitude = location.getLatitude();
                                        double longitude = location.getLongitude();
                                        lat.setText("Latitude: " + latitude);
                                        longit.setText("Longitude: "+longitude);

                                    } else {
                                        lat.setText("Location not available");
                                    }
                                }
                            });
                }
                else {
                    int LOCATION_PERMISSION_REQUEST_CODE=100;
                    ActivityCompat.requestPermissions(MainActivity.this,
                            new String[]{android.Manifest.permission.ACCESS_FINE_LOCATION},
                            LOCATION_PERMISSION_REQUEST_CODE);
                }
            }
        });

        changecol.setOnClickListener(new View.OnClickListener() {



            @Override
            public void onClick(View view) {

                name_label.setTextColor(Color.rgb(255,0,0));
                Toast.makeText(MainActivity.this, "Alert: This is a text alert!",
                        Toast.LENGTH_SHORT).show();

            }
        });

    }

}