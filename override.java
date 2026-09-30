
public class override {
    public static void main(String[] args){
        Animal a = new dog();
        a.sound();
    

    }
     static class Animal{
        public void sound(){
            System.out.println("Animal sound");
        }
    }
     static class dog extends Animal{
        @Override
        public void sound(){
            System.out.println("woof");
        }
    }
}
    

