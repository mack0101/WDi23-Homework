require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :form
end

get '/book' do
  redirect to('/') unless params[:book]
  
  erb :book
end
