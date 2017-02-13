
/* 
    This is our "Barrels" index (in this folder)
    Here we can just export all individual things

    We're also using TypeScript2's new "paths" to create non-directory import locations
    So instead of having to do something crazy like: "from '../../containers/'"

    We can just do:
        import { HomeComponent } from 'app-containers';

    Makes life easier!
*/
export * from './home/home.component';
export * from './login/login.component';
export * from './not-found/not-found.component';
export * from './admin/admin.component';
export * from './contact/contact.component';
export * from './services/services.component';