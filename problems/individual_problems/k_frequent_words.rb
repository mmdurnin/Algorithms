class Word

    attr_accessor :frequency
    attr_reader :word

    def initialize(frequency, word)
        @frequency = frequency
        @word = word
    end
end

class Heap

    attr_accessor :max_size, :word_array, :array

    def initialize(max_size)
        @array = []
        @word_array = []
        @max_size = max_size
    end

    def insert(word)
        l = @max_size < @array.length - 1 ? @max_size : @array.length - 1
        @array.push(word)
        @word_array.push(word.word)
        swap(@array, 0, l)
        swap(@word_array, 0, l)
        heap_this(0, l)
    end

    def heap_this(i, l)
        left_idx = (i * 2) + 1
        right_idx = (i * 2) + 2

        if left_idx > l
            left_val = @array[i].frequency + 1
        else
            left_val = @array[left_idx].frequency
        end

        if right_idx > l
            right_val = @array[i].frequency + 1
        else
            right_val = @array[right_idx].frequency
        end

        return if @array[i].frequency < left_val && @array[i].frequency < right_val

        swap_idx = left_val < right_val ? left_idx : right_idx

        swap(@array, swap_idx, 0)
        swap(@word_array, swap_idx, 0)
        heap_this(swap_idx, 0)
    end

end

def swap(arr, i, j)
    arr[i], arr[j] = arr[j], arr[i]
end

def k_frequent_words(arr, k)
    end_idx = k - 1
    heap = Heap.new(end_idx)
    counts = Hash.new(0)
    arr.each {|word| counts[word] += 1}

    # make a heap of the first k words
    counts.keys[0...k].each do |word|
        w = Word.new(counts[word], word)
        heap.insert(w)
    end

    # add the rest of the words to the heap if they are greater than the smallest value of the heap
    counts.keys[k..-1].each do |word|
        if counts[word] > heap.array[0].frequency
            w = Word.new(counts[word], word)
            heap.insert(w)
        end
    end

    p counts

    # heap sort
    (0..end_idx).reverse_each do |l|
        swap(heap.word_array, 0, l)
        swap(heap.array, 0, l)
        heap.heap_this(0, l - 1)
    end
    return heap.word_array[0...k]
end


p k_frequent_words(["helicopter", "news", "helicopter", "news", "pelican", "news", "helicopter", "fall", "nose", "news", "excuse", "news", "appreciate"], 3)
