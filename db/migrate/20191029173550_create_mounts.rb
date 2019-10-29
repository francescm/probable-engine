class CreateMounts < ActiveRecord::Migration[6.0]
  def change
    create_table :mounts do |t|
      t.integer :height
      t.string :name

      t.timestamps
    end
  end
end
