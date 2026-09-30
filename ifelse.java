

import java.util.Scanner;

public class ifelse {
    public static void main(String[] args){
        Scanner Sc = new Scanner(System.in);
        System.out.println("enter your age");
        int age=Sc.nextInt();
    
    if(age>=18){
        System.out.println("he is eligible for vote");
     } else{
            System.out.println("he is not eligible");
        
        }
    }
}



