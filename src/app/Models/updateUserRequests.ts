 
export class updateUserModel {
        UserId:number;
        Name:string;
        Email:string;
        Age:number;
        DOB:Date;
        Location:number;
        // List<UserSkill> userSkills
}

class UserSkill
 {
     id:number;
     Skill:string ;
     Experience:string 
     Certification:string ;
     UserId:number;
}