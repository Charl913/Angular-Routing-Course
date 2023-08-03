import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../courses/model/course";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoursesService } from "../courses/services/courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course>{
    constructor(private courses: CoursesService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | Observable<Course>{
        const courseUrl = route.paramMap.get("courseUrl");

        return this.courses.loadCourseByUrl(courseUrl);
    }
}