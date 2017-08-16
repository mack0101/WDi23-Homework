def get_user_choice
  #show available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  puts "(q) - Quit"

  print "enter your selection: "
  gets.downcase.chomp
end

##############################################

def addition
  puts "input numbers you'd like to add"
  gets.to_i + gets.to_i
end

##############################################

def subtraction
  puts "input numbers you'd like to subtract"
  puts gets.to_i - gets.to_i
end

##############################################

def multiplication
  puts "input numbers you'd like to multiply"
  puts gets.to_i * gets.to_i
end

##############################################

def division
  puts "input numbers you'd like to divide"
  puts gets.to_i / gets.to_i
end

##############################################

menu_choice = get_user_choice

until menu_choice == "q"
  case menu_choice
  when "+"
    addition
  when "-"
    subtraction
  when "*"
    multiplication
  when "/"
    division
  else
    puts "Invalid selection"
  end

  menu_choice = get_user_choice

end
