

public class cw {
    public static void main(String[] args){
    resumetemplate ramResume = new resumetemplate("anjali", 20,"BE");
    ramResume.displayResume();
    resumetemplate anjaliResume = new resumetemplate("anu",15,"eight");
    anjaliResume.displayResume();
    }
    
}
class resumetemplate{
    String name;
    int age;
    String qualification;

    public resumetemplate(String username,int userage,String userqualification){
     name=username;
     age=userage;
     qualification=userqualification;   
    }

    public void displayResume(){
        System.out.println(name);
        System.out.println(age);
        System.out.println(qualification);


    }

}
