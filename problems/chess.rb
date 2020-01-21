# Design a chess board:
# * Game: start, game over, switch turns, winner
# * Board: size, fill board with squares, fill board with pieces, find_square, index method?
# * Square: position, status (piece, player?, available)
# * Move: valid_move?, update piece, update old square, update new square, update board, update game (turn) when move complete
# * Players: white / black, pieces (hash)
# * Pieces: starting position, traversal patterns, position
# * -- Queen
# * -- King
# * -- Rook
# * -- Bishop
# * -- Knight
# * -- Pawn


class Game 
    attr_accessor :board, :players, :game_over, :winner
    def initialize()
        @board = Board.new
        @players = {white: Player.new("white"), black: Player.new("black")}
        @game_over = false
        @winner = null
    end

end

class Player
    attr_accessor :color
    def initialize(color)
        @color = color
    end

end

class Board

    def initialize
        @grid = Array.new
        
    end
end