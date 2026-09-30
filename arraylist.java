import java .util.Scanner;
import java.util.ArrayList;
public class arraylist {

    public static void main(String[] args){
        ArrayList<Integer> numberList = new ArrayList();
        numberList.add(50);
        numberList.add(80);
        System.out.println(numberList);
        numberList.remove(50);
        System.out.println(numberList);
    }
    
}
