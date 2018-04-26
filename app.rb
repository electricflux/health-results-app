require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/output'

get '/' do
  erb :'index'
end