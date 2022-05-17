import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

export interface Post {
  title?: string;
  post?: string;
  id?: string;

}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  postsCollection: AngularFirestoreCollection<Post> | any;

  posts: Observable<Post[]> | any;

  documentRefernce:AngularFirestoreDocument<Post>|any;

  constructor(private fireStore: AngularFirestore,private Auth:AngularFireAuth,private router:Router) {
    this.postsCollection = this.fireStore.collection('Posts');

    this.posts = this.postsCollection.snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map((ref: any) => {
            const data = ref.payload.doc.data() as Post;
            data.id = ref.payload.doc.id;
            return data;
          });
        })
      );
  }
  login(email:string,password:string){
    this.Auth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true')
      this.router.navigate([''])
    },err=>{
      alert("Something went wrong")
    })
  }
  register(email:string,password:string,username:string){
    this.Auth.createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user?.updateProfile({displayName:username})
      alert('Register Success')
      this.router.navigate(['/login'])

    })
  }
      
}
