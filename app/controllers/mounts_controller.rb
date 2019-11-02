class MountsController < ApplicationController
  def index
    @mounts = all_mounts
  end  
  def show
    @mount = find_mount_id
  end  
  def new
    @mounts = all_mounts
    #@mount = Mount.new
  end  
  def create
    @mount = Mount.new(post_params(:name, :height))
    @mount.save
    respond_to do |format|
      format.html
      format.json { render json: @mount }
    end
    #redirect_to mount_path(@mount)
  end  
  def edit
    @mount = find_mount_id
  end  
  def update
    @mount = find_mount_id
    @mount.update(post_params(:name, :height))
    redirect_to mount_path(@mount)
  end

  private  
  def all_mounts
    Mount.all
  end  
  def find_mount_id
    Mount.find(params[:id])
  end  
  def post_params(*args)
    params.require(:mount).permit(*args)
  end
end
