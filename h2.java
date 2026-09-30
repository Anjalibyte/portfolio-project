

import java.util.Scanner;

public class h2 {
    public static void main(String[] args){
        Scanner SC= new Scanner(System.in);
        System.out.println("enter the radius");
        double radius = SC.nextInt();
        double area = 3.14*radius*radius;

        System.out.println("area of circle:"+ area);

    }
    
}
