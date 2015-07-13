class RegistrationsController < Devise::RegistrationsController

def create
  build_resource(sign_up_params)
  resource.bucketlist = Bucketlist.new(name: "#{resource.email.split('@').first}")
  resource.save
    if resource.persisted?
      render json: ["your account has been successfully created"]
    else
      render status: 422, json: resource.errors.full_messages
		end 
end

   def sign_up_params
     params.require(:registration).permit(:email, :password, :password_confirmation)
   end

end