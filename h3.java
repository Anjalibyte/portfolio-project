

import java.util.Scanner;

public class h3 {
    public static void main(String[] args){
        Scanner SC = new Scanner(System.in);
        int[] marks = new int[10];

        int i=0;
        while(i<10) {
            System.out.println("enter marks of student"+(i+1)+":");
            marks[i] = SC.nextInt();
            i++;
        }
        System.out.println("marks of student");
        i=0;
        while(i<10){
            System.out.println("student"+(i+1)+":"+marks[i]);
            i++;
        }


    }
    
}
