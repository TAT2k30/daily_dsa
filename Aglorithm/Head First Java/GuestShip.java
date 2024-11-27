import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class GuestShip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        GuestShip guestShip = new GuestShip();

        // Tạo danh sách tàu
        List<Ship> ships = new ArrayList<>();
        ships.add(guestShip.new Ship("Pets.com", new int[][]{{3, 1}, {3, 2}, {3, 3}}));
        ships.add(guestShip.new Ship("AskMe.com", new int[][]{{6, 2}, {6, 3}, {6, 4}}));

        while (!ships.isEmpty()) {
            System.out.print("Enter a guess: ");
            String input = scanner.nextLine().toLowerCase();

            if (input.length() == 2) {
                char rowChar = input.charAt(0);
                char colChar = input.charAt(1);

                if (rowChar >= 'a' && rowChar <= 'g' && colChar >= '1' && colChar <= '7') {
                    int row = rowChar - 'a';
                    int col = colChar - '1';

                    boolean hit = false;
                    for (int i = 0; i < ships.size(); i++) {
                        Ship ship = ships.get(i);
                        if (ship.hit(row, col)) {
                            hit = true;
                            System.out.println("hit");

                            if (ship.isSunk()) {
                                System.out.println("Ouch! You sunk " + ship.getName() + " :(");
                                ships.remove(i);
                            }
                            break;
                        }
                    }

                    if (!hit) {
                        System.out.println("miss");
                    }
                } else {
                    System.out.println("Invalid input. Please guess within the grid (a1 to g7).");
                }
            } else {
                System.out.println("Invalid input. Please guess within the grid (a1 to g7).");
            }
        }

        System.out.println("kill");
        scanner.close();
    }

    public class Ship {
        private String name;
        private List<int[]> locations;

        public Ship(String name, int[][] size) {
            this.name = name;
            this.locations = new ArrayList<>();
            for (int[] loc : size) {
                locations.add(loc);
            }
        }

        public String getName() {
            return name;
        }

        public boolean hit(int row, int col) {
            for (int i = 0; i < locations.size(); i++) {
                int[] loc = locations.get(i);
                if (loc[0] == row && loc[1] == col) {
                    locations.remove(i);
                    return true;
                }
            }
            return false;
        }

        public boolean isSunk() {
            return locations.isEmpty();
        }
    }
}
