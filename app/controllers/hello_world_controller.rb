# frozen_string_literal: true

class HelloWorldController < ActionController::Base
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
