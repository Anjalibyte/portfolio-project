

public class cw1 {
    public static void main(String[] args){
        calculator calc = new calculator();
        int result = calc.sum(15,12);
        System.out.println(result);
    }
    
}
class calculator{
    int sum( int a,int b){
        int result = a + b;
        return result;

    }


}