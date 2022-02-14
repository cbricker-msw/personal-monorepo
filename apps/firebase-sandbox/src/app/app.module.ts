import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
    connectFirestoreEmulator,
    enableIndexedDbPersistence,
    getFirestore,
    provideFirestore
} from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FirebaseUIModule, firebase } from 'firebaseui-angular';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => {
            const firestore = getFirestore();
            connectFirestoreEmulator(firestore, 'localhost', 8080);
            enableIndexedDbPersistence(firestore);
            return firestore;
        }),
        provideAuth(() => getAuth()),
        FirebaseUIModule.forRoot({
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        })

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
