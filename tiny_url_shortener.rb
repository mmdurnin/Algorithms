require 'digest/md5'
def assign_tiny_url(id)
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    # make a hash that maps onto the chars (I don't know why)
    key = {}
    chars.each_char.with_index {|ch, i| key[i] = ch}
    # create a variable that represents the length of chars
    base = chars.length

    # get a randomly generated number (I don't know how -- for now I'll use ID)
    rand_num = id

    # key into chars: digital root the rand_num, 
    #                 each interval = x,
    #                 index into chars at idx: x(interval) % base(length)
    str = ""
    while rand_num > 0
        str = chars[rand_num % base] + str
        rand_num = rand_num / base
    end

end